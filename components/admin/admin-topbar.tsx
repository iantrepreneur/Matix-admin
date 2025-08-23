"use client";

import { Menu, Bell, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminTopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export function AdminTopbar({ setSidebarOpen }: AdminTopbarProps) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 lg:px-6 w-full">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile menu button + Logo (mobile) */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2 lg:hidden">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">MATIX</h1>
            </div>
          </div>
        </div>

        {/* Right side - Language, Notifications, Profile */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 px-3">
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">ENGLISH</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>ENGLISH</DropdownMenuItem>
              <DropdownMenuItem>FRANÇAIS</DropdownMenuItem>
              <DropdownMenuItem>WOLOF</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark mode toggle placeholder */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-9 w-9 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              1
            </span>
          </Button>

          {/* Admin Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-2">
                <Avatar className="h-7 w-7 mr-2">
                  <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2" />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                    AD
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Paramètres</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Se déconnecter
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}