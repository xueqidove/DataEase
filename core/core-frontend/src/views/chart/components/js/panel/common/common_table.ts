import { hexColorToRGBA, parseJson, resetRgbOpacity } from '../..//util'
import {
  DEFAULT_BASIC_STYLE,
  DEFAULT_COLOR_CASE,
  DEFAULT_TABLE_CELL,
  DEFAULT_TABLE_HEADER
} from '@/views/chart/components/editor/util/chart'
import { S2Theme, Style, TextAlign } from '@antv/s2'
import { deepAssign } from '@antv/g2plot/lib/utils'

export function getCustomTheme(chart: Chart): S2Theme {
  const headerColor = hexColorToRGBA(
    DEFAULT_TABLE_HEADER.tableHeaderBgColor,
    DEFAULT_BASIC_STYLE.alpha
  )
  const headerAlign = DEFAULT_TABLE_HEADER.tableHeaderAlign
  const itemColor = hexColorToRGBA(DEFAULT_TABLE_CELL.tableItemBgColor, DEFAULT_BASIC_STYLE.alpha)
  const itemAlign = DEFAULT_TABLE_CELL.tableItemAlign
  const borderColor = hexColorToRGBA(
    DEFAULT_BASIC_STYLE.tableBorderColor,
    DEFAULT_BASIC_STYLE.alpha
  )
  const scrollBarColor = DEFAULT_BASIC_STYLE.tableScrollBarColor
  const scrollBarHoverColor = resetRgbOpacity(scrollBarColor, 3)

  const theme: S2Theme = {
    background: {
      color: '#00000000'
    },
    splitLine: {
      horizontalBorderColor: borderColor,
      verticalBorderColor: borderColor
    },
    cornerCell: {
      cell: {
        backgroundColor: headerColor,
        horizontalBorderColor: borderColor,
        verticalBorderColor: borderColor,
        verticalBorderWidth: 0
      },
      text: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      bolderText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      measureText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      }
    },
    rowCell: {
      cell: {
        backgroundColor: headerColor,
        horizontalBorderColor: borderColor,
        verticalBorderColor: borderColor
      },
      text: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign,
        textBaseline: 'middle'
      },
      bolderText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      measureText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      seriesText: {
        fill: DEFAULT_TABLE_CELL.tableItemBgColor,
        fontSize: DEFAULT_TABLE_CELL.tableItemFontSize,
        textAlign: itemAlign
      }
    },
    colCell: {
      cell: {
        backgroundColor: headerColor,
        horizontalBorderColor: borderColor,
        verticalBorderColor: borderColor
      },
      text: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      bolderText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      },
      measureText: {
        fill: DEFAULT_TABLE_HEADER.tableHeaderFontColor,
        fontSize: DEFAULT_TABLE_HEADER.tableTitleFontSize,
        textAlign: headerAlign
      }
    },
    dataCell: {
      cell: {
        backgroundColor: itemColor,
        horizontalBorderColor: borderColor,
        verticalBorderColor: borderColor
      },
      text: {
        fill: DEFAULT_TABLE_CELL.tableFontColor,
        fontSize: DEFAULT_TABLE_CELL.tableItemFontSize,
        textAlign: itemAlign
      },
      bolderText: {
        fill: DEFAULT_TABLE_CELL.tableFontColor,
        fontSize: DEFAULT_TABLE_CELL.tableItemFontSize,
        textAlign: itemAlign
      },
      measureText: {
        fill: DEFAULT_TABLE_CELL.tableFontColor,
        fontSize: DEFAULT_TABLE_CELL.tableItemFontSize,
        textAlign: headerAlign
      }
    },
    scrollBar: {
      thumbColor: scrollBarColor,
      thumbHoverColor: scrollBarHoverColor
    }
  }

  let customAttr: DeepPartial<ChartAttr>
  if (chart.customAttr) {
    customAttr = parseJson(chart.customAttr)
    const { basicStyle, tableHeader, tableCell } = customAttr
    // basic
    if (basicStyle) {
      const tableBorderColor = hexColorToRGBA(basicStyle.tableBorderColor, basicStyle.alpha)
      const tableScrollBarColor = basicStyle.tableScrollBarColor
      const tmpTheme: S2Theme = {
        splitLine: {
          horizontalBorderColor: tableBorderColor,
          verticalBorderColor: tableBorderColor
        },
        cornerCell: {
          cell: {
            horizontalBorderColor: tableBorderColor,
            verticalBorderColor: tableBorderColor
          }
        },
        colCell: {
          cell: {
            horizontalBorderColor: tableBorderColor,
            verticalBorderColor: tableBorderColor
          }
        },
        dataCell: {
          cell: {
            horizontalBorderColor: tableBorderColor,
            verticalBorderColor: tableBorderColor
          }
        },
        scrollBar: {
          thumbColor: tableScrollBarColor,
          thumbHoverColor: resetRgbOpacity(tableScrollBarColor, 1.5)
        }
      }
      deepAssign(theme, tmpTheme)
    }
    // header
    if (tableHeader) {
      const tableHeaderFontColor = hexColorToRGBA(
        tableHeader.tableHeaderFontColor,
        basicStyle.alpha
      )
      const tableHeaderBgColor = hexColorToRGBA(tableHeader.tableHeaderBgColor, basicStyle.alpha)
      const { tableHeaderAlign, tableTitleFontSize } = tableHeader
      const tmpTheme: S2Theme = {
        cornerCell: {
          cell: {
            backgroundColor: tableHeaderBgColor
          },
          bolderText: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          },
          text: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          },
          measureText: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          }
        },
        colCell: {
          cell: {
            backgroundColor: tableHeaderBgColor
          },
          bolderText: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          },
          text: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          },
          measureText: {
            fill: tableHeaderFontColor,
            fontSize: tableTitleFontSize,
            textAlign: tableHeaderAlign
          }
        }
      }
      deepAssign(theme, tmpTheme)
    }
    // cell
    if (tableCell) {
      const tableFontColor = hexColorToRGBA(tableCell.tableFontColor, basicStyle.alpha)
      const tableItemBgColor = hexColorToRGBA(tableCell.tableItemBgColor, basicStyle.alpha)
      const { tableItemAlign, tableItemFontSize } = tableCell
      const tmpTheme: S2Theme = {
        rowCell: {
          cell: {
            backgroundColor: tableItemBgColor,
            horizontalBorderColor: tableItemBgColor,
            verticalBorderColor: tableItemBgColor
          },
          bolderText: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          },
          text: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          },
          measureText: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          },
          seriesText: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          }
        },
        dataCell: {
          cell: {
            crossBackgroundColor: tableItemBgColor,
            backgroundColor: tableItemBgColor
          },
          text: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          },
          measureText: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          },
          seriesText: {
            fill: tableFontColor,
            textAlign: tableItemAlign,
            fontSize: tableItemFontSize
          }
        }
      }
      deepAssign(theme, tmpTheme)
    }
  }

  return theme
}

export function getStyle(chart: Chart): Style {
  const style: Style = {}
  let customAttr: DeepPartial<ChartAttr>
  if (chart.customAttr) {
    customAttr = parseJson(chart.customAttr)
    const { basicStyle, tableHeader, tableCell } = customAttr
    style.colCfg = {
      height: tableHeader.tableTitleHeight
    }
    style.cellCfg = {
      height: tableCell.tableItemHeight
    }
    if (basicStyle.tableColumnMode === 'adapt') {
      delete style.colCfg.width
      style.layoutWidthType = 'compact'
    } else {
      delete style.layoutWidthType
      style.colCfg.width = basicStyle.tableColumnWidth
    }
  }

  return style
}

export function getCurrentField(valueFieldList: Axis[], field: ChartViewField) {
  let list = []
  let res = null
  try {
    list = parseJson(valueFieldList)
  } catch (err) {
    list = JSON.parse(JSON.stringify(valueFieldList))
  }
  if (list) {
    for (let i = 0; i < list.length; i++) {
      const f = list[i]
      if (field.dataeaseName === f.dataeaseName) {
        res = f
        break
      }
    }
  }

  return res
}

function getConditions(chart: Chart) {
  const res = {
    text: [],
    background: []
  }
  let conditions
  try {
    const senior = parseJson(chart.senior)
    conditions = senior.threshold ? senior.threshold.tableThreshold : null
  } catch (err) {
    const senior = parseJson(chart.senior)
    conditions = senior.threshold ? senior.threshold.tableThreshold : null
  }

  if (conditions && conditions.length > 0) {
    // table item color
    let valueColor = DEFAULT_COLOR_CASE.tableFontColor
    let valueBgColor = DEFAULT_COLOR_CASE.tableItemBgColor
    if (chart.customAttr) {
      const customAttr = parseJson(chart.customAttr)
      // color
      if (customAttr.tableCell) {
        const c = JSON.parse(JSON.stringify(customAttr.tableCell))
        valueColor = c.tableFontColor
        valueBgColor = hexColorToRGBA(c.tableItemBgColor, c.alpha)
      }
    }

    for (let i = 0; i < conditions.length; i++) {
      const field = conditions[i]
      res.text.push({
        field: field.field.dataeaseName,
        mapping(value) {
          return {
            fill: mappingColor(value, valueColor, field, 'color')
          }
        }
      })
      res.background.push({
        field: field.field.dataeaseName,
        mapping(value) {
          return {
            fill: mappingColor(value, valueBgColor, field, 'backgroundColor')
          }
        }
      })
    }
  }
  return res
}

function mappingColor(value, defaultColor, field, type) {
  let color
  for (let i = 0; i < field.conditions.length; i++) {
    let flag = false
    const t = field.conditions[i]
    if (field.field.deType === 2 || field.field.deType === 3 || field.field.deType === 4) {
      const tv = parseFloat(t.value)
      if (t.term === 'eq') {
        if (value === tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'not_eq') {
        if (value !== tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'lt') {
        if (value < tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'gt') {
        if (value > tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'le') {
        if (value <= tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'ge') {
        if (value >= tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'between') {
        const min = parseFloat(t.min)
        const max = parseFloat(t.max)
        if (min <= value && value <= max) {
          color = t[type]
          flag = true
        }
      }
      if (flag) {
        break
      } else if (i === field.conditions.length - 1) {
        color = defaultColor
      }
    } else if (field.field.deType === 0 || field.field.deType === 5) {
      const tv = t.value
      if (t.term === 'eq') {
        if (value === tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'not_eq') {
        if (value !== tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'like') {
        if (value.includes(tv)) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'not like') {
        if (!value.includes(tv)) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'null') {
        if (value === null || value === undefined || value === '') {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'not_null') {
        if (value !== null && value !== undefined && value !== '') {
          color = t[type]
          flag = true
        }
      }
      if (flag) {
        break
      } else if (i === field.conditions.length - 1) {
        color = defaultColor
      }
    } else {
      // time
      const tv = new Date(t.value.replace(/-/g, '/') + ' GMT+8').getTime()
      const v = new Date(value.replace(/-/g, '/') + ' GMT+8').getTime()
      if (t.term === 'eq') {
        if (v === tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'not_eq') {
        if (v !== tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'lt') {
        if (v < tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'gt') {
        if (v > tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'le') {
        if (v <= tv) {
          color = t[type]
          flag = true
        }
      } else if (t.term === 'ge') {
        if (v >= tv) {
          color = t[type]
          flag = true
        }
      }
      if (flag) {
        break
      } else if (i === field.conditions.length - 1) {
        color = defaultColor
      }
    }
  }
  return color
}
