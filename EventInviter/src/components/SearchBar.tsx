import TextField from "@mui/material/TextField";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Stack direction={"row"} alignItems={"center"} gap={1} paddingBottom={2}>
      <SearchIcon></SearchIcon>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Stack>
  );
};
