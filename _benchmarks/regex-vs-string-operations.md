---
title: regex vs string operations
setup: |
  
tests:
  -
    name: regex
    code: |
      var offerCodesList = [
            'N1602PZ', 'K1701PXM', 'P1701PXM', 'N1701PXM', '41701PXM', 'N1701PXMF', 'N1701PXMC', 'N1701PXMB', '21701PXMC', '41701PX1A', '41701PX1B', '41701PX2A', '41701PX2B',
            '41701PX3A', '41701PX3B', 'K1701PXT', 'P1701PXT', '41701PXT1', '41701PXT2', '41701PXTD', 'K1701PXT', 'K1701PXT1', '41701PXT2', 'P1701PXT', 'K1701PXL', 'P1701PXL', '41701PXL1',
            '41701PXL2', 'N1701PXLFB', 'N1701PXLTW', 'K1601PXW', 'P1601PXW', '41601PXW1', '41601PXW2', 'O1701PXMASC', 'O1701BXMASC', 'O1701DXMASC', 'O1701PXMAS4', 'O1701BXMAS4', 'O1701DXMAS4',
            'O1701PXMAS2', 'O1701BXMAS2', 'O1701DXMAS2', 'O1701PXMAS1', 'O1701BXMAS1', 'O1701DXMAS1', 'O1701PXMAS3', 'O1701BXMAS3', 'O1701DXMAS3', '41701PXMASC', '41701BXMASC', '41701DXMASC',
            '41701PXMAS4', '41701BXMAS4', '41701DXMAS4', '41701PXMAS1', '41701BXMAS1', '41701DXMAS1', 'P1701PXMAS1', 'P1701BXMAS1', 'P1701DXMAS1', 'P1701PXMAS2', 'P1701BXMAS2', 'P1701DXMAS2',
            '21701PXZJEL1', '21701BXZJEL1', '21701DXZJEL1', '21701PXZJEL2', '21701BXZJEL2', '21701DXZJEL2', 'A1701BX3PM', 'A1701BXISUB', 'A1701BXMAG', 'M1701PXMAS1', 'M1701BXMAS1', 'M1701DXMAS1',
            'M1701PXMAS2', 'M1701BXMAS2', 'M1701DXMAS2', '21701PXMAS1', '21701BXMAS1', '21701DXMAS1', 'N1701PXMAS', 'N1701BXMAS', 'N1701DXMAS', 'N1701PXZWEB', 'N1701BXZWEB', 'N1701DZWEB',
            'K1701PX', 'P1701PX', '41701PX1A', '41701PX2A', '41701PX3A', '41701PX1B', '41701PX2B', '41701PX3B', '01701PX', 'N1701PX', 'N1701BX', '21701PXZJEL', '21701PXZPER', '21701PXZBJEL',
            '21701BXZJEL', '21701BXZPER', '21701BXZBJEL', '21701DXZJEL', '41612P1', '41612P2', '41612P3', '41612P4', '41612P5', '41612P6', '41612P7', '41612P8', '41612P9', 'O1612PXA', 'O1612PXB',
            'O1612PW', 'O1612PXC', 'O1612PXD', 'O16PXMASE', 'O1612PXG', 'O1612PXF', 'B1612PX', 'B1612PA', 'B1612PC', 'B1612PW', 'P1612PB', 'P1612PA', 'P1612PC', 'M1612PA', 'M1612PB', '21612PFB',
            '21612PTW', '21612PIG', '21612PZJEL', 'N1612PZWEB', 'A1612PA', 'A1612PB', 'A1612PC', 'A1612PC', 'T1612PX', 'X1612PX', 'G1612PX', 'G1612PY', 'G1612PA', 'G1612PB', 'G1612PC', 'G1612PD'
          ]
          // 'N1602PZ' just for preview - remove before live!
          var result = new RegExp(offerCodesList.join('|'), 'i').test('O1612PXB')
      console.log(result)
  -
    name: string operations
    code: |
      var offerCodesList = [
            'N1602PZ', 'K1701PXM', 'P1701PXM', 'N1701PXM', '41701PXM', 'N1701PXMF', 'N1701PXMC', 'N1701PXMB', '21701PXMC', '41701PX1A', '41701PX1B', '41701PX2A', '41701PX2B',
            '41701PX3A', '41701PX3B', 'K1701PXT', 'P1701PXT', '41701PXT1', '41701PXT2', '41701PXTD', 'K1701PXT', 'K1701PXT1', '41701PXT2', 'P1701PXT', 'K1701PXL', 'P1701PXL', '41701PXL1',
            '41701PXL2', 'N1701PXLFB', 'N1701PXLTW', 'K1601PXW', 'P1601PXW', '41601PXW1', '41601PXW2', 'O1701PXMASC', 'O1701BXMASC', 'O1701DXMASC', 'O1701PXMAS4', 'O1701BXMAS4', 'O1701DXMAS4',
            'O1701PXMAS2', 'O1701BXMAS2', 'O1701DXMAS2', 'O1701PXMAS1', 'O1701BXMAS1', 'O1701DXMAS1', 'O1701PXMAS3', 'O1701BXMAS3', 'O1701DXMAS3', '41701PXMASC', '41701BXMASC', '41701DXMASC',
            '41701PXMAS4', '41701BXMAS4', '41701DXMAS4', '41701PXMAS1', '41701BXMAS1', '41701DXMAS1', 'P1701PXMAS1', 'P1701BXMAS1', 'P1701DXMAS1', 'P1701PXMAS2', 'P1701BXMAS2', 'P1701DXMAS2',
            '21701PXZJEL1', '21701BXZJEL1', '21701DXZJEL1', '21701PXZJEL2', '21701BXZJEL2', '21701DXZJEL2', 'A1701BX3PM', 'A1701BXISUB', 'A1701BXMAG', 'M1701PXMAS1', 'M1701BXMAS1', 'M1701DXMAS1',
            'M1701PXMAS2', 'M1701BXMAS2', 'M1701DXMAS2', '21701PXMAS1', '21701BXMAS1', '21701DXMAS1', 'N1701PXMAS', 'N1701BXMAS', 'N1701DXMAS', 'N1701PXZWEB', 'N1701BXZWEB', 'N1701DZWEB',
            'K1701PX', 'P1701PX', '41701PX1A', '41701PX2A', '41701PX3A', '41701PX1B', '41701PX2B', '41701PX3B', '01701PX', 'N1701PX', 'N1701BX', '21701PXZJEL', '21701PXZPER', '21701PXZBJEL',
            '21701BXZJEL', '21701BXZPER', '21701BXZBJEL', '21701DXZJEL', '41612P1', '41612P2', '41612P3', '41612P4', '41612P5', '41612P6', '41612P7', '41612P8', '41612P9', 'O1612PXA', 'O1612PXB',
            'O1612PW', 'O1612PXC', 'O1612PXD', 'O16PXMASE', 'O1612PXG', 'O1612PXF', 'B1612PX', 'B1612PA', 'B1612PC', 'B1612PW', 'P1612PB', 'P1612PA', 'P1612PC', 'M1612PA', 'M1612PB', '21612PFB',
            '21612PTW', '21612PIG', '21612PZJEL', 'N1612PZWEB', 'A1612PA', 'A1612PB', 'A1612PC', 'A1612PC', 'T1612PX', 'X1612PX', 'G1612PX', 'G1612PY', 'G1612PA', 'G1612PB', 'G1612PC', 'G1612PD'
          ]
          // 'N1602PZ' just for preview - remove before live!
          var result = offerCodesList.join('|').toLowerCase().indexOf('O1612PXB'.toLowerCase()) > -1 
      console.log(result)
---

