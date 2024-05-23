import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div key={order._id} className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              {order.restaurant && order.restaurant.imageUrl ? (
                <img
                  src={order.restaurant.imageUrl}
                  alt={order.restaurant.restaurantName || "Restaurant Image"}
                  className="rounded-md object-cover h-full w-full"
                />
              ) : (
                <div className="rounded-md object-cover h-full w-full bg-gray-200 flex items-center justify-center">
                  Image not available
                </div>
              )}
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
