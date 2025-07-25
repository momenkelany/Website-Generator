import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Loader2, Plus, Globe, Lightbulb } from 'lucide-react'
import './App.css'

const API_BASE_URL = 'http://localhost:3001/api'

function App() {
  const [websiteIdea, setWebsiteIdea] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [savedIdeas, setSavedIdeas] = useState([])
  const [isLoadingIdeas, setIsLoadingIdeas] = useState(false)

  // Fetch saved ideas on component mount
  useEffect(() => {
    fetchSavedIdeas()
  }, [])

  const fetchSavedIdeas = async () => {
    setIsLoadingIdeas(true)
    try {
      const response = await fetch(`${API_BASE_URL}/website-ideas`)
      if (!response.ok) {
        throw new Error('Failed to fetch saved ideas')
      }
      const data = await response.json()
      setSavedIdeas(data)
    } catch (err) {
      console.error('Error fetching saved ideas:', err)
      setError('Failed to load saved ideas')
    } finally {
      setIsLoadingIdeas(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!websiteIdea.trim()) {
      setError('Please enter a website idea')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_BASE_URL}/website-ideas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea: websiteIdea }),
      })

      if (!response.ok) {
        throw new Error('Failed to create website idea')
      }

      const newIdea = await response.json()
      setSavedIdeas(prev => [newIdea, ...prev])
      setWebsiteIdea('')
    } catch (err) {
      console.error('Error creating website idea:', err)
      setError('Failed to create website idea. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Website Generator</h1>
          </div>
          <p className="text-lg text-gray-600">
            Enter your website idea and get instant section suggestions
          </p>
        </div>

        {/* Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Create New Website Idea
            </CardTitle>
            <CardDescription>
              Describe your website concept and we'll generate relevant sections for you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="e.g., Landing page for a bakery"
                  value={websiteIdea}
                  onChange={(e) => setWebsiteIdea(e.target.value)}
                  className="text-lg"
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}
              <Button 
                type="submit" 
                disabled={isLoading || !websiteIdea.trim()}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Sections...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Generate Website Sections
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Saved Ideas */}
        <Card>
          <CardHeader>
            <CardTitle>Saved Website Ideas</CardTitle>
            <CardDescription>
              Your previously generated website concepts and their sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingIdeas ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin mr-2" />
                Loading saved ideas...
              </div>
            ) : savedIdeas.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No website ideas yet. Create your first one above!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {savedIdeas.map((idea) => (
                  <div key={idea._id} className="border rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {idea.idea}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {formatDate(idea.createdAt)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {idea.sections.map((section, index) => (
                        <Badge key={index} variant="secondary">
                          {section}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App

