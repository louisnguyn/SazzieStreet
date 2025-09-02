import Header from "../../components/Header/Header";
import Footer from  "../../components/Footer/Footer";
import "./MainPageLayout.css"
export default function MainPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
        <main>
            <Header />
            {children}
        </main>
        <Footer />
    </div>
  )
}
