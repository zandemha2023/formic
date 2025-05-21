import { useState } from 'react'
import Head from 'next/head'

const roles = ['CMO', 'Head of Growth', 'Marketing Ops', 'Other']
const priorities = [
  'Customer Acquisition',
  'Pipeline Influence',
  'Retention',
  'Creative Testing',
  'Efficiency',
  'All of the Above',
]
const platforms = ['Meta', 'Google Ads', 'GA4', 'Klaviyo', 'Mailchimp', 'LinkedIn Ads']

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([])
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([])

  const togglePriority = (p: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const togglePlatform = (p: string) => {
    setConnectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  return (
    <>
      <Head>
        <title>Onboarding - Formic</title>
      </Head>
      <div className="p-4 max-w-lg mx-auto">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome to Formic</h1>
              <p className="text-gray-600">Let’s configure your strategic memory system</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">What is your role?</p>
                {roles.map((r) => (
                  <label key={r} className="block">
                    <input
                      type="radio"
                      name="role"
                      className="mr-2"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r)}
                    />
                    {r}
                  </label>
                ))}
              </div>
              <div>
                <p className="font-medium mb-2">What does Formic need to prioritize for you?</p>
                {priorities.map((p) => (
                  <label key={p} className="block">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedPriorities.includes(p)}
                      onChange={() => togglePriority(p)}
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setStep(2)}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Connect your marketing platforms</h1>
            <div className="space-y-2">
              {platforms.map((p) => (
                <label key={p} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={connectedPlatforms.includes(p)}
                    onChange={() => togglePlatform(p)}
                  />
                  {p}
                </label>
              ))}
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setStep(3)}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
            <h1 className="text-2xl font-bold">Setup Complete. Let’s start analyzing.</h1>
          </div>
        )}
      </div>
    </>
  )
}
