import { MapPin, Clock, ArrowRight, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const upcomingEvents = [
  {
    id: 1,
    date: "15",
    month: "JAN",
    year: "2025",
    title: "Spring Semester Open House",
    time: "10:00 AM - 2:00 PM",
    location: "Main Campus",
    description:
      "Tour our facilities, meet faculty members, and discover our programs. Learn about our vibrant student life and academic excellence.",
    image: "/school-open-house-campus-tour.jpg",
  },
  {
    id: 2,
    date: "22",
    month: "JAN",
    year: "2025",
    title: "Parent-Teacher Conference Week",
    time: "3:00 PM - 7:00 PM",
    location: "Various Classrooms",
    description:
      "Schedule one-on-one meetings with teachers to discuss student progress, academic goals, and development plans for the semester.",
    image: "/parent-teacher-meeting-classroom.jpg",
  },
  {
    id: 3,
    date: "05",
    month: "FEB",
    year: "2025",
    title: "Annual Science Fair",
    time: "9:00 AM - 4:00 PM",
    location: "Gymnasium",
    description:
      "Students showcase their innovative projects and research. Open to families and community members. Awards ceremony at 3:00 PM.",
    image: "/school-science-fair-projects-display.jpg",
  },
]

const recentEvents = [
  {
    id: 4,
    date: "10",
    month: "DEC",
    year: "2024",
    title: "Winter Arts Festival",
    time: "6:00 PM - 9:00 PM",
    location: "Auditorium",
    description:
      "Students showcased their artistic talents through music, dance, and visual arts. The evening featured performances from our choir, band, and drama club.",
    gallery: [
      "/students-performing-winter-concert.jpg",
      "/art-exhibition-student-paintings.jpg",
      "/drama-club-stage-performance.jpg",
    ],
  },
  {
    id: 5,
    date: "18",
    month: "DEC",
    year: "2024",
    title: "Community Service Day",
    time: "8:00 AM - 3:00 PM",
    location: "Various Locations",
    description:
      "Students participated in community outreach programs, including food drives, park cleanups, and visits to local senior centers.",
    gallery: [
      "/students-community-service-cleanup.jpg",
      "/food-drive-donation-collection.jpg",
      "/students-visiting-senior-center.jpg",
    ],
  },
  {
    id: 6,
    date: "20",
    month: "DEC",
    year: "2024",
    title: "Holiday Celebration",
    time: "2:00 PM - 5:00 PM",
    location: "Main Hall",
    description:
      "Our annual holiday celebration brought together students, families, and staff for festive activities, performances, and refreshments.",
    gallery: [
      "/holiday-celebration-decorations.jpg",
      "/students-holiday-performance.jpg",
      "/holiday-party-refreshments.jpg",
    ],
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="mb-12">
            <span className="text-sm text-secondary font-medium mb-3 block tracking-wide">MARK YOUR CALENDAR</span>
            <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">Upcoming Events</h3>
            <div className="w-20 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <a key={event.id} href={`/events/${event.id}`} className="block">
                <Card className="group overflow-hidden bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-3 rounded-md shadow-lg">
                      <div className="text-2xl font-bold leading-none">{event.date}</div>
                      <div className="text-xs font-medium mt-1">{event.month}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {event.title}
                    </h4>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>

                    <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-12">
            <span className="text-sm text-secondary font-medium mb-3 block tracking-wide">RECENT ACTIVITIES</span>
            <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">Recent Events</h3>
            <div className="w-20 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recentEvents.map((event) => (
              <a key={event.id} href={`/events/${event.id}`} className="block">
                <Card className="group overflow-hidden bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={event.gallery[0] || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-3 rounded-md shadow-lg">
                      <div className="text-2xl font-bold leading-none">{event.date}</div>
                      <div className="text-xs font-medium mt-1">{event.month}</div>
                    </div>
                    {/* Gallery indicator */}
                    <div className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.gallery.length} Photos
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {event.title}
                    </h4>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.description}</p>

                    <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                      View Gallery
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md font-medium transition-colors"
          >
            View All Events
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
