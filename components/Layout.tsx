import Sidebar from './Sidebar'
import TopBar from './TopBar'
import MainContent from './MainContent'
import ChatPanel from './ChatPanel'

export default function Layout() {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <MainContent />
          <div className="hidden sm:block">
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
