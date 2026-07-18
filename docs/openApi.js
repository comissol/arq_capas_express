export const docApi = {
    "openapi": "3.0.0",
    "info": {
        "title": "API de Perros (DogsDB)",
        "version": "1.0.0",
        "description": "API para gestionar el registro de perros."
    },
    "paths": {
        "/api/perros": {
            "get": {
                "summary": "Obtener todos los perros",
                "responses": {
                    "200": {
                        "description": "Lista de perros obtenida con éxito",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Dog"
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "No hay perros en la base de datos"
                    }
                }
            },
            "post": {
                "summary": "Crear un nuevo perro",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/DogInput"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Perro creado exitosamente"
                    },
                    "400": {
                        "description": "El cuerpo de la solicitud no puede estar vacío"
                    }
                }
            }
        },
        "/api/perros/{id}": {
            "get": {
                "summary": "Obtener un perro por ID",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Perro encontrado",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Dog"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Perro no encontrado"
                    }
                }
            },
            "put": {
                "summary": "Actualizar un perro",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/DogInput"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Perro actualizado exitosamente"
                    },
                    "404": {
                        "description": "Perro no encontrado"
                    }
                }
            },
            "delete": {
                "summary": "Eliminar un perro",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Perro eliminado correctamente"
                    },
                    "404": {
                        "description": "Perro no encontrado, no se pudo eliminar"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Dog": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "breed": {
                        "type": "string"
                    },
                    "age": {
                        "type": "number"
                    },
                    "isGoodBoy": {
                        "type": "boolean"
                    }
                }
            },
            "DogInput": {
                "type": "object",
                "required": [
                    "name",
                    "breed",
                    "age"
                ],
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "breed": {
                        "type": "string"
                    },
                    "age": {
                        "type": "number"
                    },
                    "isGoodBoy": {
                        "type": "boolean",
                        "default": true
                    }
                }
            }
        }
    }
}
    
