import PropTypes from "prop-types";
import { Button } from "./FeedbackVar.styled";

export default function FeedbackVar({ options, onMakeFeedback }) {
    return Object.keys(options).map((key) => (
        <Button key={key} type="button" onClick={() => onMakeFeedback(key)}>
            {key}
        </Button>
    ));
}
FeedbackVar.propTypes = {
    options: PropTypes.object.isRequired,
    onMakeFeedback: PropTypes.func.isRequired,
}
