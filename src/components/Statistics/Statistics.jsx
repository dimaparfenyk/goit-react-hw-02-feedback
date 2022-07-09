import React from "react"
import PropTypes from "prop-types";
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

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}


export default Statistics;