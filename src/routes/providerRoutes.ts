export const providerRoutes = [
  {
    title: "Provider Analytics",
    items: [
      {
        title: "Dashboard",
        url: "/provider-dashboard/dashboard",
      },
      // orders
      {
        title: "Orders",
        items: [
          {
            title: "All Orders",
            url: "/provider-dashboard/orders",
          },
          {
            title: "Pending Orders",
            url: "/provider-dashboard/orders/pending",
          },
          {
            title: "Completed Orders",
            url: "/provider-dashboard/orders/completed",
          },
        ],
      },

      {
        title: "Products",
        items: [
          {
            title: "My Products",
            url: "/provider-dashboard/products",
          },
          {
            title: "Add Product",
            url: "/provider-dashboard/products/createProducts",
          },
        ],
      },
      {
        title: "Profile",
        url: "/provider-dashboard/profile",
      },
    ],
  },
];
