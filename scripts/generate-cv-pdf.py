import sys
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # Header title
        self.set_font('Helvetica', 'B', 18)
        self.set_text_color(20, 50, 120) # Nice professional navy/blue
        self.cell(0, 8, 'JUNGUDO MUHAMMAD TUKUR', new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(80, 80, 80)
        self.cell(0, 5, 'UI/UX Designer  |  Product Manager  |  Tech Entrepreneur', new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.set_font('Helvetica', '', 9)
        self.set_text_color(100, 100, 100)
        self.cell(0, 5, 'Gombe State, Nigeria   |   jungudo.muhammad@gmail.com   |   linkedin.com/in/jungudo-tukur', new_x="LMARGIN", new_y="NEXT", align='C')
        
        self.ln(2)
        self.set_draw_color(20, 50, 120)
        self.set_line_width(0.8)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def section_heading(self, title):
        self.ln(3)
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(20, 50, 120)
        self.cell(0, 5, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(200, 200, 200)
        self.set_line_width(0.3)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

def generate_pdf():
    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    
    # Summary
    pdf.section_heading("Professional Summary")
    pdf.set_font('Helvetica', '', 9.5)
    pdf.set_text_color(40, 40, 40)
    summary_text = (
        "Entrepreneurial UI/UX designer and product lead with hands-on experience designing, building, and managing "
        "AI-powered digital products for African communities. Founder of WizzyAI (an AI learning companion for children aged 5-15), "
        "co-founder of AgriSense IoT (offline-first farm monitoring for Northern Nigeria), and lead designer for PropaBridge "
        "(a verified real estate marketplace). Skilled at translating complex social challenges into accessible, human-centred digital "
        "solutions that function in low-connectivity environments. Passionate about leveraging emerging technology to advance inclusive "
        "development across Africa."
    )
    pdf.multi_cell(0, 4.5, summary_text)
    
    # Education
    pdf.section_heading("Education")
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(140, 5, "Bachelor of Science - Computer Science")
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(50, 5, "2024 - Present", new_x="LMARGIN", new_y="NEXT", align='R')
    
    pdf.set_font('Helvetica', 'I', 9.5)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 4.5, "University of the People (UoPeople) - Online", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(50, 50, 50)
    pdf.multi_cell(0, 4.5, "- Studying software development, systems thinking, and data structures\n- Relevant coursework: Programming Fundamentals, Introduction to Computer Science")
    
    # Experience
    pdf.section_heading("Experience")
    
    # Exp 1: WizzyAI
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(140, 5, "Founder & Product Lead")
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(50, 5, "April 2026 - Present", new_x="LMARGIN", new_y="NEXT", align='R')
    
    pdf.set_font('Helvetica', 'I', 9.5)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 4.5, "WizzyAI - AI-Powered Learning Companion - Remote", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(50, 50, 50)
    exp1 = (
        "- Conceived and built an AI-powered learning companion for African children aged 5-15, integrating six adaptive learning modes: Chat, Homework Help, Stories, Quiz, Curiosity, and Creative Writing\n"
        "- Led end-to-end product development using React, Supabase, and the Claude (Anthropic) API; architected a freemium model targeting Nigerian school children\n"
        "- Designed brand identity, UX flows, and frontend interface; created a full business plan and pitch materials for hackathon and incubation programme applications\n"
        "- Navigated significant resource constraints to deliver a working prototype using AI-assisted no-code and low-code tools (Lovable, v0, Windsurf)"
    )
    pdf.multi_cell(0, 4.5, exp1)
    pdf.ln(2)
    
    # Exp 2: PropaBridge
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(140, 5, "Lead UI/UX Designer")
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(50, 5, "2025 - Present", new_x="LMARGIN", new_y="NEXT", align='R')
    
    pdf.set_font('Helvetica', 'I', 9.5)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 4.5, "PropaBridge (Zippatek) - Nigerian Real Estate Marketplace - Remote", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(50, 50, 50)
    exp2 = (
        "- Led full product rebrand for a verified property listings platform serving Abuja, Kaduna, and Minna; redesigned navigation architecture, landing copy, and listing card components\n"
        "- Designed and delivered an email HTML template, a 'Verified' listing badge, and a Realtor Affiliate Programme UX - all approved and implemented in Framer CMS\n"
        "- Produced formal QA documentation, managed GitHub pull requests, and coordinated frontend tasks (FE-002 through FE-010) across a cross-functional team\n"
        "- Conducted UX audits and contributed to the product's digital strategy and partner onboarding system"
    )
    pdf.multi_cell(0, 4.5, exp2)
    pdf.ln(2)
    
    # Exp 3: AgriSense IoT
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(140, 5, "Co-Founder & Operations Lead")
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(50, 5, "2025 - Present", new_x="LMARGIN", new_y="NEXT", align='R')
    
    pdf.set_font('Helvetica', 'I', 9.5)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 4.5, "AgriSense IoT - Offline-First Farm Monitoring - Gombe State, Nigeria", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(50, 50, 50)
    exp3 = (
        "- Co-founded an environmental monitoring startup for poultry and livestock farms in Northern Nigeria, designed to operate offline-first via SMS and siren-based alerts - no smartphone required\n"
        "- Selected for iHatch Cohort 5 incubation programme; developed MVP roadmap, pitch deck, team structure, and demo video materials\n"
        "- Led operations including programme submissions, stakeholder communications, website build strategy, and go-to-market planning\n"
        "- Oversaw branding and positioning exercises, including name and identity refinement for investor readiness"
    )
    pdf.multi_cell(0, 4.5, exp3)
    pdf.ln(2)
    
    # Exp 4: KBS Creation
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(140, 5, "Founder")
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(50, 5, "2023 - Present", new_x="LMARGIN", new_y="NEXT", align='R')
    
    pdf.set_font('Helvetica', 'I', 9.5)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 4.5, "KBS Creation - Gift & Decor Business - Gombe State, Nigeria", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(50, 50, 50)
    exp4 = (
        "- Founded and operate a gift and decor business serving individual and corporate clients in Gombe State\n"
        "- Manage end-to-end operations including product sourcing, customer engagement, social media marketing, and order fulfilment"
    )
    pdf.multi_cell(0, 4.5, exp4)
    
    # Skills
    pdf.section_heading("Skills")
    pdf.set_font('Helvetica', '', 8.5)
    skills_text = (
        "Design & Product: UI/UX Design | Framer | Figma | Product Management | User Research & UX Auditing | Branding & Visual Identity | Prototyping & Wireframing\n"
        "Development & AI: React.js | Next.js | Claude API / Anthropic SDK | Supabase | GitHub | HTML / CSS | IoT Systems & Offline-First Design | No-code (Framer, Lovable, v0)\n"
        "Soft Skills: Strategic Communication | Project Coordination | Startup Operations | Adaptability & Resilience | Cross-functional Teamwork | Stakeholder Engagement"
    )
    pdf.multi_cell(0, 4, skills_text)
    
    # Achievements
    pdf.section_heading("Achievements & Recognition")
    pdf.set_font('Helvetica', '', 9)
    achievements_text = (
        "- Selected for iHatch Cohort 5 incubation programme (AgriSense IoT) - one of Nigeria's competitive agri-tech accelerators\n"
        "- Built and launched a functional AI-powered children's educational app (WizzyAI) as a solo founder with zero institutional funding\n"
        "- Successfully led a full product rebrand for a VC-backed Nigerian real estate platform (PropaBridge/Zippatek)"
    )
    pdf.multi_cell(0, 4.5, achievements_text)
    
    # Languages
    pdf.section_heading("Languages")
    pdf.set_font('Helvetica', '', 9)
    pdf.cell(0, 4.5, "English (Fluent)   |   Hausa (Native)   |   Fulfulde (Native)")
    
    output_path = "./public/documents/Jungudo-Muhammad-Tukur-CV.pdf"
    pdf.output(output_path)
    print("✅ PDF generated successfully at", output_path)

if __name__ == "__main__":
    generate_pdf()
