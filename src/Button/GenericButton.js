import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import React from "react";

const GenericButton = ({ action, label, disabled }) => (
    <Button disabled={disabled} onClick={action}>{label}</Button>
);

GenericButton.propTypes = {
    action: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export default GenericButton;
