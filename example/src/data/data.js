import {
  data1 as rawData1,
  data2 as rawData2,
  data3 as rawData3,
  data4 as rawData4,
  dataColored3 as rawData5,
} from './rawData';

import jsonData1 from './dataJson1';
import jsonData2 from './dataJson2';
import moment from 'moment';

// export const data1 = rawData1.map(([x, y]) => ({x, y}));
// export const data2 = rawData2.map(([x, y]) => ({ x, y }));
export const data3 = rawData3.map(([x, y]) => ({ x, y }));
export const data4 = rawData4.map(([x, y]) => ({ x, y }));
export const data5 = rawData5.map(([x, y]) => ({ x, y }));

function parseJson(dataToParse) {
  return dataToParse.reduce((result, { close, date, minute }) => {
    if (close != 0.0) {
      if (minute != '') {
        date += 'T' + minute;
      }
      result.push({ timestamp: moment(date).valueOf(), value: close });
    } else {
      dayLength1--;
      dayLength2--;
    }
    return result;
  }, []);
}

export let dayLength1 = 390;
export let dayLength2 = 390;

export const data1 = parseJson(jsonData1.data.getChart.chart);
export const data2 = parseJson(jsonData2.data.getChart.chart);
