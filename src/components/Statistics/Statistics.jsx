import React from "react"
import { StatList,StatItem,StatItemText } from "./Statistics.styled";

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {

    return (
        <StatList>
            <StatItem>
                <StatItemText>Good:</StatItemText> {[good]} </StatItem>
            <StatItem>
                <StatItemText>Neutral:</StatItemText> {[neutral]} </StatItem>
            <StatItem>
                <StatItemText>Bad:</StatItemText> {[bad]} </StatItem>
            <StatItem>
                <StatItemText>Total:</StatItemText> {total}</StatItem>
            <StatItem>
                <StatItemText>Positive feedback:</StatItemText> {positivePercentage}%</StatItem>
        </StatList>
    )
};

export default Statistics;