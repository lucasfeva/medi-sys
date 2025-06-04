"use client";

import {
  CalendarDays,
  Gem,
  LayoutDashboard,
  LogOut,
  Stethoscope,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const menuCategories = [
  {
    label: "Menu Principal",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Agendamentos",
        url: "/appointments",
        icon: CalendarDays,
      },
      {
        title: "Médicos",
        url: "/doctors",
        icon: Stethoscope,
      },
      {
        title: "Pacientes",
        url: "#",
        icon: Users2,
      },
    ],
  },
  {
    label: "Outros",
    items: [
      {
        title: "Planos",
        url: "/plans",
        icon: Gem,
      },
    ],
  },
];

export function AppSidebar() {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/authentication");
        },
      },
    });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-1 p-6">
          <Image src="/icons/logo-icon.svg" alt="Logo" width={42} height={42} />
          <Image
            src="/icons/logo-text.svg"
            alt="MediSys"
            width={113}
            height={32}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {menuCategories.map((category, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{category.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Clinica</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
