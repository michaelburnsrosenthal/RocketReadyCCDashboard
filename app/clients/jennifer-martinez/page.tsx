"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUp,
  Bell,
  Calendar,
  ChevronDown,
  ChevronRight,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  TrendingUp,
  User,
} from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ClientDetailPage() {
  const [activeTaskTab, setActiveTaskTab] = useState("all")
  const today = new Date()

  // Sample data for Jennifer Martinez
  const client = {
    name: "Jennifer Martinez",
    phone: "(512) 555-0123",
    email: "jennifer.martinez@email.com",
    enrollmentDate: "March 15, 2024",
    currentScore: 642,
    scoreChange: 18,
    scoreTrend: "up",
    goalSummary: "Target: Buy $350K home in Austin by Spring 2026",
    progressPercentage: 68,
    dtiRatio: 47,
    paymentHistory: 2,
    targetScore: "680+",
    targetDti: "<43%",
    nextAppointment: "Tomorrow at 2:00 PM",
  }

  // Sample tasks data
  const coachTasks = [
    {
      id: 1,
      title: "Review dispute results from Experian",
      status: "in-progress",
      dueDate: "Today",
      priority: "high",
    },
    {
      id: 2,
      title: "Explain debt consolidation options",
      status: "not-started",
      dueDate: "Dec 20",
      priority: "medium",
    },
    {
      id: 3,
      title: "Prepare pre-approval documentation checklist",
      status: "completed",
      dueDate: "Dec 15",
      priority: "high",
    },
    {
      id: 4,
      title: "Schedule lender introduction meeting",
      status: "not-started",
      dueDate: "Dec 22",
      priority: "medium",
    },
  ]

  const clientTasks = [
    {
      id: 5,
      title: "Pay Capital One to 30% utilization",
      status: "overdue",
      dueDate: "Dec 10",
      priority: "high",
    },
    {
      id: 6,
      title: "Dispute medical collection with TransUnion",
      status: "in-progress",
      dueDate: "Dec 18",
      priority: "high",
    },
    {
      id: 7,
      title: "Submit proof of income documents",
      status: "completed",
      dueDate: "Dec 12",
      priority: "medium",
    },
    {
      id: 8,
      title: "Set up automatic payments for student loan",
      status: "not-started",
      dueDate: "Dec 25",
      priority: "low",
    },
  ]

  const allTasks = [...coachTasks, ...clientTasks]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200"
      case "medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  // Sample communication history
  const communicationHistory = [
    {
      id: 1,
      type: "call",
      title: "Credit Review Session",
      date: "Dec 15, 2024",
      summary: "Reviewed recent credit report changes. Discussed dispute strategy for medical collection.",
    },
    {
      id: 2,
      type: "email",
      title: "Dispute Letter Templates",
      date: "Dec 12, 2024",
      summary: "Sent customized dispute letter templates for TransUnion medical collection.",
    },
    {
      id: 3,
      type: "call",
      title: "Progress Check-in",
      date: "Dec 8, 2024",
      summary: "Client reported successful payment to Capital One. Score increased by 8 points.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex flex-1 items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
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

      {/* Main Content */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/clients" className="hover:text-foreground">
            Clients
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{client.name}</span>
        </nav>

        {/* Client Overview Header */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt={client.name} />
                    <AvatarFallback className="text-lg">JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{client.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {client.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {client.email}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Enrolled: {client.enrollmentDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                  <span className="font-semibold">Rocket Ready</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Goal Summary</p>
                  <p className="text-lg">{client.goalSummary}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-muted-foreground">Mortgage Readiness</p>
                    <p className="text-sm font-medium">{client.progressPercentage}%</p>
                  </div>
                  <Progress value={client.progressPercentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-center">Current Credit Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{client.currentScore}</div>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <ArrowUp className="h-3 w-3 mr-1" />+{client.scoreChange} this month
                  </Badge>
                </div>
                <div className="h-16 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Task Management - Primary Focus */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Task Management</CardTitle>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Coach Tasks */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Coach Tasks ({coachTasks.length})
                </h3>
                <div className="space-y-3">
                  {coachTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                          {task.status.replace("-", " ")}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Tasks */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Client Tasks ({clientTasks.length})
                </h3>
                <div className="space-y-3">
                  {clientTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={`text-xs ${getStatusColor(task.status)}`}>
                          {task.status.replace("-", " ")}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Snapshot and Communication */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Credit Snapshot */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{client.currentScore}</p>
                    <p className="text-xs text-muted-foreground">Credit Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{client.dtiRatio}%</p>
                    <p className="text-xs text-muted-foreground">DTI Ratio</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{client.paymentHistory}</p>
                    <p className="text-xs text-muted-foreground">Late Payments</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium mb-2">Target Metrics</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      Need {client.targetScore} score, {client.targetDti} DTI
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 font-medium">Recent Alert</p>
                  <p className="text-sm text-green-700">Score increased {client.scoreChange} points this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication History */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Communication History</CardTitle>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <p className="text-sm font-medium text-blue-800">Next Appointment</p>
                  </div>
                  <p className="text-sm text-blue-700">{client.nextAppointment}</p>
                </div>
                <div className="space-y-3">
                  {communicationHistory.map((comm) => (
                    <div key={comm.id} className="border-l-2 border-gray-200 pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        {comm.type === "call" ? (
                          <Phone className="h-3 w-3 text-green-600" />
                        ) : (
                          <Mail className="h-3 w-3 text-blue-600" />
                        )}
                        <p className="text-sm font-medium">{comm.title}</p>
                        <span className="text-xs text-muted-foreground">{comm.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{comm.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button className="h-auto flex-col py-4 gap-2">
                <Plus className="h-5 w-5" />
                <span>Add Task</span>
              </Button>
              <Button className="h-auto flex-col py-4 gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Call</span>
              </Button>
              <Button className="h-auto flex-col py-4 gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>Send Message</span>
              </Button>
              <Button className="h-auto flex-col py-4 gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Update Progress</span>
              </Button>
              <Button className="h-auto flex-col py-4 gap-2">
                <FileText className="h-5 w-5" />
                <span>View Credit Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
