import React from 'react';
import { data } from "./data";
import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';

export const TableData = () => {
    return (
        <React.Fragment>
        <TableContainer>
            <Table>
                <TableBody>
                    {data.map((subItem, subIndex) => (
                        <TableRow key={subIndex}>
                            {subItem.map((item, index) => (
                                <TableCell key={index} colSpan={item[2]} rowSpan={item[1]} style={{ border: '1px solid black' }}>
                                    {item[0].split('\n').map((line, lineIndex) => (
                                        <Typography 
                                            key={lineIndex}
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </React.Fragment>
    );
}