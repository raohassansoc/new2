"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("ZRX/USD", 305, 3.7, 67, 4.3),
  createData("ZRX/USD", 452, 25.0, 51, 4.9),
  createData("ETH/EUR", 262, 16.0, 24, 6.0),
  createData("ZRX/USD", 159, 6.0, 24, 4.0),
  createData("ETH/EUR", 356, 16.0, 49, 3.9),
  createData("ZRX/USD", 408, 3.2, 87, 6.5),
  createData("ETH/EUR", 237, 9.0, 37, 4.3),
  createData("ZRX/USD", 375, 0.0, 94, 0.0),
  createData("ZRX/USD", 518, 26.0, 65, 7.0),
  createData("ETH/EUR", 392, 0.2, 98, 0.0),
  createData("ZRX/USD", 318, 0, 81, 2.0),
  createData("ETH/EUR", 360, 19.0, 9, 37.0),
  createData("ZRX/USD", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Instrument",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Last Price",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "24H Change",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "24H Low",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "24H Volume",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{borderBottom: "6px solid #414345"}}>
          <StarBorderIcon sx={{ color: "white" }} />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: "white",borderBottom: "6px solid #414345" }}
            className="pointer-events-none"
          >
            <TableSortLabel
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{ color: "white" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="checkbox" sx={{borderBottom: "6px solid #414345"}}></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function MarketTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const [crypto, setCrypto] = React.useState([
    {
      logo: "/images/ETH.webp",
      instrument: "ZRX/USD",
      price: "0.05647",
      change: "+4.67",
      low: "0.0547",
      volume: "30,515,515",
    },
    {
      logo: "/images/ACS.webp",
      instrument: "ETH/EUR",
      price: "0.05647",
      change: "+4.67",
      low: "0.0547",
      volume: "30,515,515",
    },
    {
      logo: "/images/AAVE.webp",
      instrument: "ZRX/USD",
      price: "0.05647",
      change: "+4.67",
      low: "0.0547",
      volume: "30,515,515",
    },
    {
      logo: "/images/CRO.webp",
      instrument: "ETH/EUR",
      price: "0.05647",
      change: "+4.67",
      low: "0.0547",
      volume: "30,515,515",
    },
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, backgroundColor: "#161616" }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750}}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {crypto.map((row, index) => {
                return (
                  <TableRow
                    hover
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#232323",
                      color: "white",
                    }}
                  >
                    <TableCell padding="checkbox" sx={{borderBottom: "6px solid #414345"}}>
                      <StarBorderIcon sx={{ color: "white",  }} />
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      padding="none"
                      sx={{ color: "white",borderBottom: "6px solid #414345" }}
                    >
                      <div className="flex">
                        <span className="mr-2">
                          <Image src={row.logo} width={20} height={20} />
                        </span>
                        {row.instrument}
                      </div>
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white", borderBottom: "6px solid #414345" }}>
                      {row.price}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white", borderBottom: "6px solid #414345" }}>
                      {row.change}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white", borderBottom: "6px solid #414345" }}>
                      {row.low}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white", borderBottom: "6px solid #414345" }}>
                      ${row.volume}
                      <br />
                      <span className="text-[11px]">20,566 ETH</span>
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white", borderBottom: "6px solid #414345" }}>
                      <button className="py-2 px-4 mx-2 bg-[#e50914] rounded-2xl text-white font-bold text-xs">
                        Trade
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ color: "white" }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}

export default MarketTable;
