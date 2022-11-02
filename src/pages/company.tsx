import { Header } from "../components/Header";
import { Table } from "../components/Table";
import Chart from 'react-apexcharts';
import { useState } from "react";
import { Box } from "@mui/material";
import { ApexOptions } from 'apexcharts';

interface OptionsTypes {
    options: ApexOptions;
    series: Array<any>;
}

export function Company (){
    const [ optionsPIE, setOptionsPIE ] = useState<OptionsTypes>({
        options: {
            chart: {
              id: 'apexchart-example'
            },            
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            responsive: [
              {
                breakpoint: 600,
                options: {
                  chart: {
                    width: 0,
                    height: 0,
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              },
              ],
          },
          series: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        });

    const [ optionsLine, setOptionsLine ] = useState<OptionsTypes>( {
        options: {
          chart: {
            id: "basic-bar",
            zoom: {
                enabled: false
            }
          },
          title: {
            text: 'Companies last days',
            align: 'center'
          },
          stroke: {
            curve: 'straight',
            colors:  ['#6149DB']
          },

          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
          responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                width: 0,
                height: 0,
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          ],
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
    });


    return (
        <>
            <Header />

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: '0 auto',
                width: {
                    xs: '90%',
                    sm: '90%',
                    md: '85%',
                    lg: '85%',


                }
            }}>


                <Table pathName="company" entityProps={{name: '', cnpj: '', description: '', responsibleName: '', responsiblePhone: '', responsibleCep: '', responsibleHouseNumber: ''}}/>

                <Box display={{
                    sx: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex'
                }} sx={{
                    flexDirection: 'column',
                    gap: 5,
                    justifyContent: 'center'
                }}>

                    <Chart options={optionsPIE.options} series={optionsPIE.series} type="pie" width={300} height={300}/>
                    <Chart options={optionsLine.options} series={optionsLine.series} type="line" width={300} height={200}/>

                </Box>

            </Box>

        </>
    )
}