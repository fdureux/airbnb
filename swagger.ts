const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'APIs Airbnb Document',
    description:
      'This is a sample server Airbnb server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).',
    termsOfService: '',
    contact: {
      name: 'Gobelin Malin',
      email: 'mariemeline.paus@gmail.com'
    }
  },
  host: 'api-airbnb-node.herokuapp.com',
  basePath: '/api',
  schemes: 'https',
  paths: {
    '/accomodations': {
      get: {
        description: 'Returns all accomodations',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Accomodation id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'name',
            description: 'Accomodation name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'description',
            description: 'Accomodation description',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'capacity',
            description: 'Accomodation capacity',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'price',
            description: 'Accomodation price',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'adress',
            description: 'Accomodation adress',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'fees',
            description: 'Accomodation fees',
            required: false,
            type: 'int'
          },

          {
            in: 'params',
            name: 'codepostal',
            description: 'Accomodation code postal',
            required: false,
            type: 'int'
          },

          {
            in: 'params',
            name: 'country',
            description: 'Accomodation country',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of accomodations.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/accomodationItem'
              }
            }
          }
        }
      },
      post: {
        description:
          'Create one accomodation with parameter : name, description, capacity, price, adress, fees, codepostal, country',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'accomodationItem',
            description: 'Accomodation item to add',
            schema: {
              $ref: '#/definitions/accomodationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one accomodation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one accomodation with parameter : name, image_url, tracker_count, music_url',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'accomodationItem',
            description: 'Accomodation item to modify',
            schema: {
              $ref: '#/definitions/accomodationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one accomodation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one accomodation with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'accomodationItem',
            description: 'Accomodation item to delete',
            schema: {
              $ref: '#/definitions/accomodationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one accomodation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/accomodations/:id': {
      get: {
        description: 'Returns one accomodation with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'name',
            description: 'Accomodation id',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'One accomodation.'
          }
        }
      }
    },
    '/accomodations/:id/pictures': {
      get: {
        description: 'Returns all pictures of one accomodation with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Accomodation id',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'all pictures of one accomodation.'
          }
        }
      }
    },
    '/accomodations/:id/reservations': {
      get: {
        description: 'Returns all reservations of one accomodation with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Accomodation id',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'all reservations of one accomodation.'
          }
        }
      }
    },
    '/pictures': {
      get: {
        description: 'Returns all pictures',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Picture id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'url',
            description: 'Picture url',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'id_accomodation',
            description: 'Accomodation id',
            required: false,
            type: 'int'
          }
        ],
        responses: {
          '200': {
            description: 'A list of pictures.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/pictureItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one picture with parameter : url, id_accomodation',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'pictureItem',
            description: 'Picture item to add',
            schema: {
              $ref: '#/definitions/pictureItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one picture.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one picture with parameter : url, id_accomodation',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'pictureItem',
            description: 'Picture item to modify',
            schema: {
              $ref: '#/definitions/pictureItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one picture.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one picture with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'pictureItem',
            description: 'Picture item to delete',
            schema: {
              $ref: '#/definitions/pictureItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one picture.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/reservations': {
      get: {
        description: 'Returns all reservations',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Reservation id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'date_begin',
            type: 'datetime',
            description: 'Reservation begin date',
            required: false
          },
          {
            in: 'params',
            name: 'date_end',
            description: 'Reservation end date',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'id_accomodation',
            description: 'Accomodation id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_usern',
            description: 'User id',
            required: false,
            type: 'int'
          }
        ],
        responses: {
          '200': {
            description: 'A list of reservations.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/reservationItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one reservation with parameter : date_begin, date_end, id_accomodation, id_user',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'reservationItem',
            description: 'Reservation item to add',
            schema: {
              $ref: '#/definitions/reservationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one reservation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one reservation with parameter : date_begin, date_end, id_accomodation, id_user',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'reservationItem',
            description: 'Reservation item to modify',
            schema: {
              $ref: '#/definitions/reservationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one reservation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one reservation with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'reservationItem',
            description: 'Reservation item to delete',
            schema: {
              $ref: '#/definitions/reservationItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one reservation.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/users': {
      get: {
        description: 'Returns all users',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'firstname',
            description: 'User firstname',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'lastname',
            description: 'User lastname',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'avatar',
            description: 'User avatar',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'A list of User.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/userItem'
              }
            }
          }
        }
      },
      post: {
        description:
          'Create one user with parameter : firstname, lastname, avatar',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to add',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one user with parameter : firstname, lastname, avatar',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to modify',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one user with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to delete',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
  },
  definitions: {
    accomodationItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        name: {
          type: 'string',
          example: 'Villa'
        },
        description: {
          type: 'string',
          example: 'Super Villa'
        },
        capacity: {
          type: 'int',
          example: '1'
        },
        price: {
          type: 'int',
          example: '100'
        },
        adress: {
          type: 'string',
          example: '3 rue du Goeland'
        },
        fees: {
          type: 'int',
          example: '30'
        },
        codepostal: {
          type: 'int',
          example: '33000'
        },
        country: {
          type: 'string',
          example: 'France'
        }
      }
    },
    pictureItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        url: {
          type: 'string',
          format: 'url',
          example:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWGBcYFxgWGRceGhcaFxUYFxgaGhcYHiggGRolHRcVIjEiJSkrLi4uHR8zODMsNygtLisBCgoKDg0OGxAQGy0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABEEAABAgQEAwUGAwUGBQUAAAABAhEAAyExBBJBUQVhcRMigZGxBjKhwdHwQlLhFCMzcoIHFWKSsvFDU3OTohYkRIPC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEAAgIBBAIBAwIHAAAAAAAAAAECEQMSITFBBBNRIjJhcZEFFEKBobHB/9oADAMBAAIRAxEAP'
        },
        id_accomodation: {
          type: 'id',
          example: '1'
        }
      }
    },
    reservationItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        date_begin: {
          type: 'string',
          format: 'datetime',
          example: '2020-03-03 12:03:02'
        },
        date_end: {
          type: 'string',
          format: 'datetime',
          example: '2020-03-03 12:03:02'
        },
        id_accomodation: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        id_user: {
          type: 'int',
          format: 'id',
          example: '1'
        },
      }
    },
    userItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        firstname: {
          type: 'string',
          example: '2020-03-03 12:03:02'
        },
        lastname: {
          type: 'string',
          example: '2020-03-03 12:03:02'
        },
        avatar: {
          type: "string",
          format: 'url',
          example: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXFRcWGBcYFxUXFxUXFxUXFxUWGBcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABAEAABAwIDBQUGAwcEAQUAAAABAAIRAyEEEjEFQVFhcQYigZGhBxMyscHRUuHwFCNCYnKS8TNDorJTFSQ0Y4L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAjEQEAAgEEAQQDAAAAAAAAAAAAAQIRAxIhMVEEIkFhE0KB/9oADAMBAAIRAxEAPwDmL9FKADHqkXEC9'
        },
      },
    }
  }
};

module.exports = swaggerDocument;
