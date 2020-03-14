module.exports = ({
  repository,
}) => ({
  get: (name) => {
    try {
      const variable = repository.get(name)
      return variable || 'Not Found'
    } catch (err) {
      return err
    }
  },
})
