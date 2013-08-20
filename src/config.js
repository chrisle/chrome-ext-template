require.config({ 

  baseUrl: './src',

  paths: {
    'jquery'          : 'vendor/jquery-2.0.2.min',
    'backbone'        : 'vendor/backbone',
    'underscore'      : 'vendor/underscore',
    'mutationSummary' : 'vendor/mutation_summary'
  },

  shim: {
    'backbone' : {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }

});
