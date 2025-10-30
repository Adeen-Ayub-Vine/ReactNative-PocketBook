import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { API_URL } from "../constants/api_url";

export const useTransactions = (userId: string) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // useCallback is used for getting data for any change in dependency i.e userId

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();
      if (!data || Object.keys(data).length === 0) {
        setTransactions([]);
      } else {
        setTransactions(data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch summary");
      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        setSummary({ income: 0, expenses: 0, balance: 0 }); // default values
      } else {
        setSummary(data);
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary({ income: 0, expenses: 0, balance: 0 }); // fallback
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;

    setIsLoading(true);
    try {
      // can be run in parallel
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, userId]);

  const deleteTransaction = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete transaction");

      // Refresh data after deletion
      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (error:any) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", error.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
};