function formatDate(value) {
    return value.toISOString().split('T')[0]
}

module.exports = formatDate