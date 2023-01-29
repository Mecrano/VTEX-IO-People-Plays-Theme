export const NearestStoreSchema = {
  title: "Configuracion tiendas",
  type: "object",
  properties: {
    showComponent: {
      title: "Mostrar componente",
      type: "boolean",
      default: true,
    },
    title: {
      title: "Titulo",
      type: "string",
    },
    subTitle: {
      title: "Sub Titulo",
      type: "string",
    },
    googleMapsApiKey: {
      title: "Google Maps Api Key",
      type: "string",
    },
    stores: {
      title: "Tiendas",
      type: "array",
      items: {
        title: "Gestionar Tiendas",
        type: "object",
        minItems: 1,
        properties: {
          name: {
            title: "Nombre de la tienda",
            type: "string",
          },
          address: {
            title: "Dirección",
            type: "string",
          },
          local: {
            title: "Local",
            type: "string",
          },
          schedules: {
            title: "Horarios",
            type: "string",
          },
          phone: {
            title: "Teléfono",
            type: "string",
          },
          showWhatsapp: {
            title: "Mostrar botton de whatsapp",
            type: "boolean",
            default: true,
          },
          lat: {
            title: "Latitud",
            type: "number",
          },
          lng: {
            title: "Longitud",
            type: "number",
          },
        },
      },
    },
  },
};
