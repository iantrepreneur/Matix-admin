import AdminLayoutUI from "@/components/admin/admin-layout-ui";

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutUI>{children}</AdminLayoutUI>;
}