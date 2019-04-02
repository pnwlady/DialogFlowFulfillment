// 1. set context example
agent.context.set({
    'name':'context-name',
    'lifespan': 5,
    'parameters':{
      'parameter-name':'parameter-value'
      }
  });

  // to clear context 
  // set lifespan to 0 
  agent.context.set({
    'name': 'context-name',
    'lifespan': 0,
    'parameters': {
      'parameter':'parameter-value'
    }
  })
  //or delete context 
  agent.context.delete('context-name')

// 1. get context example


// 2. set context example
const { WebhookClient } = require('dialogflow-webhook'); 
const agent = new WebhookClient({request: request, response: response}); 
agent.setContext('sample context name'); 
const context = {'name': 'weather', 'lifespan': 2, 'parameters': {'city': 'Rome'}}; 
agent.setContext(context);