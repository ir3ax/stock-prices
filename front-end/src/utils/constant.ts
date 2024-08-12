import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";

export const candleStickOptions: ApexOptions = {
  chart: {
    type: 'candlestick',
    background: '#142539', 
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left',
    style:{
      color: '#ffffff'
    }
  },
  annotations: {
    xaxis: [
      {
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#ffffff',
            background: '#00E396',
          },
          orientation: 'horizontal',
          offsetY: 7,
        },
      },
    ],
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      formatter: function (val: string | number | Date | dayjs.Dayjs | null | undefined) {
        return dayjs(val).format('MMM DD HH:mm');
      },
      style: {
        fontSize: '12px',
        colors: '#ffffff'
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    labels: {
      style: {
        fontSize: '12px',
        colors: '#ffffff'
      },
    },
  },
};