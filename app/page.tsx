"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  Calendar,
  ChevronDown,
  ClipboardList,
  Clock,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Plus,
  Search,
  Send,
  Settings,
  Users,
  Phone,
} from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all")
  const today = new Date()

  // Sample data for clients
  const priorityClients = [
    {
      id: 1,
      name: "Jennifer Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 642,
      trend: "up",
      trendValue: 18,
      daysUntilPurchase: 45,
      priority: "urgent",
      lastContact: "2 days ago",
      nextAction: "Review credit report changes",
      reason: "Negative credit change detected",
    },
    {
      id: 2,
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 598,
      trend: "down",
      trendValue: 12,
      daysUntilPurchase: 60,
      priority: "urgent",
      lastContact: "9 days ago",
      nextAction: "Follow up on collection dispute",
      reason: "Overdue action (9 days)",
    },
    {
      id: 3,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 675,
      trend: "up",
      trendValue: 23,
      daysUntilPurchase: 30,
      priority: "high",
      lastContact: "Yesterday",
      nextAction: "Prepare for lender meeting",
      reason: "Upcoming deadline",
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 615,
      trend: "up",
      trendValue: 7,
      daysUntilPurchase: 90,
      priority: "normal",
      lastContact: "3 days ago",
      nextAction: "Update debt paydown plan",
      reason: "On track with action plan",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 582,
      trend: "down",
      trendValue: 5,
      daysUntilPurchase: 120,
      priority: "high",
      lastContact: "3 days ago",
      nextAction: "Reschedule missed appointment",
      reason: "Missed appointment",
    },
    {
      id: 6,
      name: "Robert Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 701,
      trend: "up",
      trendValue: 31,
      daysUntilPurchase: 15,
      priority: "urgent",
      lastContact: "Yesterday",
      nextAction: "Final pre-approval preparation",
      reason: "Ready for mortgage",
    },
    {
      id: 7,
      name: "Lisa Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 620,
      trend: "none",
      trendValue: 0,
      daysUntilPurchase: 180,
      priority: "new",
      lastContact: "1 day ago",
      nextAction: "Schedule first coaching session",
      reason: "Recently onboarded",
    },
    {
      id: 8,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      creditScore: 590,
      trend: "none",
      trendValue: 0,
      daysUntilPurchase: 150,
      priority: "new",
      lastContact: "2 days ago",
      nextAction: "Complete initial assessment",
      reason: "Recently onboarded",
    },
  ]

  // Remove or comment out the old todaysAppointments array since it's now integrated into the agenda
  // const todaysAppointments = [...]

  // Sample data for recent activity
  const recentActivity = [
    {
      id: 1,
      clientName: "Sarah Williams",
      action: "Credit score increased by 23 points",
      time: "2 hours ago",
    },
    {
      id: 2,
      clientName: "Michael Johnson",
      action: "Dispute letter sent to Experian",
      time: "Yesterday",
    },
    {
      id: 3,
      clientName: "David Thompson",
      action: "Completed debt paydown strategy call",
      time: "Yesterday",
    },
    {
      id: 4,
      clientName: "Jennifer Martinez",
      action: "Updated credit report received",
      time: "2 days ago",
    },
    {
      id: 5,
      clientName: "Robert Chen",
      action: "Pre-approval documents submitted",
      time: "2 days ago",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-red-600"></div>
            <span className="font-semibold text-lg">Rocket Ready</span>
          </div>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <div className="flex items-center gap-2 mb-6">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jessica Davis</p>
                <p className="text-xs text-muted-foreground">Senior Consultant</p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 text-sm" />
            </div>
          </div>
          <div className="space-y-1 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2 text-primary font-medium">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Clients
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </Button>
            <Separator className="my-4" />
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">{format(today, "EEEE, MMMM d, yyyy")}</div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">Jessica Davis</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Clients</CardDescription>
                <CardTitle className="text-2xl">42</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" /> 8%
                  </span>{" "}
                  from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Appointments Today</CardDescription>
                <CardTitle className="text-2xl">3</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">Next: Robert Chen at 1:15 PM</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Avg. Credit Improvement</CardDescription>
                <CardTitle className="text-2xl">+47 pts</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" /> 12%
                  </span>{" "}
                  from last quarter
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Priority Clients */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Priority Clients</h2>
              <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="urgent">Urgent</TabsTrigger>
                  <TabsTrigger value="high">High</TabsTrigger>
                  <TabsTrigger value="normal">Normal</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {priorityClients
                .filter((client) => activeTab === "all" || client.priority === activeTab)
                .map((client) => (
                  <Card key={client.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                            <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{client.name}</CardTitle>
                            {client.priority !== "new" && (
                              <CardDescription>Last contact: {client.lastContact}</CardDescription>
                            )}
                          </div>
                        </div>
                        <Badge
                          variant={
                            client.priority === "urgent"
                              ? "destructive"
                              : client.priority === "high"
                                ? "default"
                                : client.priority === "new"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {client.priority.charAt(0).toUpperCase() + client.priority.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Credit Score</p>
                          <div className="flex items-center">
                            <span className="text-lg font-medium mr-2">{client.creditScore}</span>
                            {client.trend === "up" ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                <ArrowUp className="h-3 w-3 mr-1" />+{client.trendValue}
                              </Badge>
                            ) : client.trend === "down" ? (
                              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                <ArrowDown className="h-3 w-3 mr-1" />-{client.trendValue}
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                                Initial
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Purchase Timeline</p>
                          <div className="flex items-center">
                            <span className="text-lg font-medium">{client.daysUntilPurchase}</span>
                            <span className="text-sm ml-1">days</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Next Action</p>
                        <p className="text-sm">{client.nextAction}</p>
                        <p className="text-xs text-muted-foreground mt-1">{client.reason}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-muted/50 px-4 py-2">
                      {client.name === "Jennifer Martinez" ? (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/clients/jennifer-martinez">View Details</Link>
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        Contact
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* Today's Agenda with Intelligent Prioritization */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Today's Agenda</CardTitle>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Full Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* IMMEDIATE */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    <h3 className="font-semibold text-sm text-red-700">IMMEDIATE</h3>
                    <span className="text-xs text-muted-foreground">Next 2 hours + prep needed</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
                      <Clock className="h-4 w-4 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Jennifer Martinez - Credit Review</p>
                        <p className="text-xs text-muted-foreground">
                          10:30 AM (45 min) • Prep: Review dispute results
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                        Prepared
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
                      <FileText className="h-4 w-4 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Prepare Emily Rodriguez materials</p>
                        <p className="text-xs text-muted-foreground">
                          Meeting at 3:30 PM • Need dispute follow-up docs
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Needs Prep
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* TODAY'S DEADLINES */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                    <h3 className="font-semibold text-sm text-orange-700">TODAY'S DEADLINES</h3>
                    <span className="text-xs text-muted-foreground">Hard deadlines</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3">
                      <Bell className="h-4 w-4 text-orange-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Submit Michael Johnson's dispute letters</p>
                        <p className="text-xs text-muted-foreground">Due: End of day • Experian & TransUnion</p>
                      </div>
                      <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
                        High Priority
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3">
                      <FileText className="h-4 w-4 text-orange-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Complete Sarah Williams pre-approval checklist</p>
                        <p className="text-xs text-muted-foreground">Due: 5:00 PM • Lender meeting tomorrow</p>
                      </div>
                      <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
                        Urgent
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* MEETING PREP */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <h3 className="font-semibold text-sm text-blue-700">MEETING PREP</h3>
                    <span className="text-xs text-muted-foreground">This week's appointments</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                      <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Robert Chen final pre-approval prep</p>
                        <p className="text-xs text-muted-foreground">Tomorrow 1:15 PM • Review all documentation</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                        Ready
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                      <Users className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Prepare Lisa Patel onboarding materials</p>
                        <p className="text-xs text-muted-foreground">Thursday 10:00 AM • First coaching session</p>
                      </div>
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                        To Do
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* FOLLOW-UPS */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-600"></div>
                    <h3 className="font-semibold text-sm text-yellow-700">FOLLOW-UPS</h3>
                    <span className="text-xs text-muted-foreground">Overdue client actions</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                      <MessageSquare className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Michael Johnson - Collection dispute follow-up</p>
                        <p className="text-xs text-muted-foreground">9 days overdue • Last contact: Dec 8</p>
                      </div>
                      <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 text-xs">
                        Overdue
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                      <Phone className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">David Thompson - Debt paydown check-in</p>
                        <p className="text-xs text-muted-foreground">5 days overdue • Should have updated plan</p>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 text-xs">
                        Follow-up
                      </Badge>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                      <FileText className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Emily Rodriguez - Reschedule missed appointment</p>
                        <p className="text-xs text-muted-foreground">3 days since missed call • Need to reconnect</p>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 text-xs">
                        Reschedule
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <div className="flex gap-2 w-full">
                <Button className="flex-1">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
                <Button variant="outline" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Single Column Layout - Recent Activity */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ClipboardList className="h-4 w-4 mr-2" />
                      Filter
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>All Activity</DropdownMenuItem>
                    <DropdownMenuItem>Credit Changes</DropdownMenuItem>
                    <DropdownMenuItem>Client Communications</DropdownMenuItem>
                    <DropdownMenuItem>Document Updates</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="relative mt-1">
                      <div className="flex h-2 w-2 items-center justify-center">
                        <div className="absolute h-2 w-2 rounded-full bg-primary" />
                      </div>
                      {activity.id !== recentActivity.length && (
                        <div className="absolute left-1 top-2 h-[calc(100%-0.5rem)] w-px bg-border" />
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium">{activity.clientName}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-auto flex-col py-4 gap-2">
                  <Users className="h-5 w-5" />
                  <span>Add New Client</span>
                </Button>
                <Button className="h-auto flex-col py-4 gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Appointment</span>
                </Button>
                <Button className="h-auto flex-col py-4 gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Add Client Note</span>
                </Button>
                <Button className="h-auto flex-col py-4 gap-2">
                  <Send className="h-5 w-5" />
                  <span>Send Reminder</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
