const repository = require('./src/repository/variable')
const service = require('./src/service/env-service')({
  repository,
})

const templateName = 'getEnvVar'
const displayName = 'Get System Env'
const description = 'Get System Environment Variable'

const args = [
  {
    displayName: 'variableName',
    description: 'Name of variable on your OS System',
    type: 'string',
    defaultValue: 'Name of variable you want to get',
  },
]

const run = async (context, variableName) => service.get(variableName)

const templateTags = [
  {
    name: templateName,
    displayName,
    description,
    args,
    run,
  },
]

module.exports = {
  templateTags,
}
