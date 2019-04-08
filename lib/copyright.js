function selectCopyRightStatements(value) {
    return value.startsWith('opyright', 1) &&         // include copyright statements
      !value.startsWith('opyright notice', 1) &&    // exclude lines from from license text
      !value.startsWith('opyright and related rights', 1);
}

module.exports = {
    selectCopyRightStatements
};