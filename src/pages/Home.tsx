import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useTable, useSortBy, Column } from "react-table";

function Home() {
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Category",
        accessor: "category",
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      [
        {
          date: `${new Date().getDay()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
          title: "Potato League",
          category: "Game",
        },
        {
          date: `${new Date().getDay()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
          title: "Yello League",
          category: "Game",
        },
      ] as any[],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Flex
      height="100vh"
      width="100%"
      justify="center"
      align="center"
      background="gray.100"
    >
      <Box width="75%" boxShadow="md" rounded="md" background="white">
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}

export default Home;
