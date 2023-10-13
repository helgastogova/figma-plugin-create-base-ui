import React from 'react';
import s from './styles.module.css';
export const TestComponent = ({ textText }) => {
    return React.createElement("div", { className: s.root }, textText !== null && textText !== void 0 ? textText : 'Hello!');
};
//# sourceMappingURL=index.js.map