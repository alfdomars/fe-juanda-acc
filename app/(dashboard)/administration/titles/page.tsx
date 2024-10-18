"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Title {
  id: number;
  name: string;
}

const TitlePage = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch("/api/titles");
        if (!response.ok) {
          throw new Error("Failed to fetch titles");
        }
        const data: Title[] = await response.json();
        setTitles(data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTitles();
  }, []);

  const handleCreate = () => {
    router.push("/administration/titles/create");
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" gutterBottom>
          Title List
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create New Title
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Card variant="outlined">
          <CardContent>
            {titles.length === 0 ? (
              <Typography>No titles available</Typography>
            ) : (
              <ul>
                {titles.map((title) => (
                  <li key={title.id}>
                    <Typography>{title.name}</Typography>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default TitlePage;
