/* eslint-disable  react-native/no-inline-styles */
import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"

interface DemoDividerProps {
  type?: "vertical" | "horizontal"
  size?: number
  style?: StyleProp<ViewStyle>
  line?: boolean
}

export function DemoDivider(props: DemoDividerProps) {
  const {
    type = "horizontal",
    size = spacing._10,
    line = false,
    style: $styleOverride,
  } = props

  return (
    <View
      style={[
        $divider,
        type === "horizontal" && { height: size },
        type === "vertical" && { width: size },
        $styleOverride,
      ]}
    >
      {line && (
        <View
          style={[
            $line,
            type === "horizontal" && {
              width: spacing._150,
              height: spacing._1,
              marginStart: -spacing._75,
              marginTop: -spacing._1,
            },
            type === "vertical" && {
              height: spacing._50,
              width: spacing._1,
              marginTop: -spacing._25,
              marginStart: -spacing._1,
            },
          ]}
        />
      )}
    </View>
  )
}

const $divider: ViewStyle = {
  flexGrow: 0,
  flexShrink: 0,
}

const $line: ViewStyle = {
  backgroundColor: colors.border,
  position: "absolute",
  left: "50%",
  top: "50%",
}
