export function buildCollegeOrUniversitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": "https://www.glbitm.org/#organization",
    name: "GL Bajaj Institute of Technology and Management",
    alternateName: [
      "GLBITM",
      "G. L. Bajaj Institute of Technology and Management",
      "GL Bajaj Institute of Technology & Management",
      "G. L. Bajaj Institute of Technology & Management",
    ],
    url: "https://www.glbitm.org/",
    mainEntityOfPage: "https://www.glbitm.org/",
    description:
      "Established in 2005, GL Bajaj Institute of Technology and Management (GLBITM) is a private, self-financing higher education institution located in Greater Noida, Uttar Pradesh, India. Operating under the aegis of the Institute of Dental and Medical Research Society, GLBITM offers undergraduate and postgraduate education in engineering, technology, management and computer applications. The institution is approved by the All India Council for Technical Education (AICTE), affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), and holds NAAC A+ institutional accreditation with a CGPA of 3.33 out of 4.00. GLBITM has also received an overall Diamond rating from QS I-GAUGE. GLBITM supports innovation and entrepreneurship through GL Bajaj Center for Research and Incubation (GLBCRI), its incubation centre and recipient of the AKTU Leader Incubator Award 2026.",
    disambiguatingDescription:
      "GLBITM is the engineering, technology and management education institution established in 2005 at Knowledge Park III, Greater Noida, Uttar Pradesh, India, distinct from other institutions operating under the GL Bajaj name.",
    foundingDate: "2005",
    foundingLocation: {
      "@type": "Place",
      name: "Greater Noida, Uttar Pradesh, India",
    },
    founder: {
      "@type": "Person",
      name: "Dr. Ram Kishore Agarwal",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Institute of Dental and Medical Research Society",
    },
    slogan: "Find Your Spark",
    logo: {
      "@type": "ImageObject",
      url: "https://www.glbitm.org/images/logo/colored-logo.png",
    },
    image: {
      "@type": "ImageObject",
      url: "https://www.glbitm.org/assets/img/pages/9/section_1783489672_6a4de48820896.webp",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 2, APJ Abdul Kalam Road, Knowledge Park III",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201306",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.47247092558961,
      longitude: 77.48909388650658,
    },
    hasMap:
      "https://www.google.com/maps/place/GL+Bajaj+Institute+of+Technology+%26+Management/data=!4m2!3m1!1s0x0:0x8274cec5a1321578",
    telephone: ["+91-7290008310", "+91-7290008390", "+91-8010000234"],
    email: "office@glbitm.ac.in",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "General Enquiries",
        telephone: ["+91-7290008310", "+91-7290008390", "+91-8010000234"],
        email: "office@glbitm.ac.in",
      },
      {
        "@type": "ContactPoint",
        contactType: "Admissions",
        telephone: [
          "+91-8750720005",
          "+91-8750610005",
          "+91-8750730005",
          "+91-8750620005",
          "+91-7835005123",
        ],
      },
      {
        "@type": "ContactPoint",
        contactType: "Accounts and Fee Enquiries",
        email: "accounts@glbitm.ac.in",
      },
      {
        "@type": "ContactPoint",
        contactType: "Careers",
        email: "careers@glbitm.ac.in",
      },
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "AISHE Code",
        value: "C-46239",
      },
      {
        "@type": "PropertyValue",
        propertyID: "AICTE Permanent ID",
        value: "1-4863336",
      },
      {
        "@type": "PropertyValue",
        propertyID: "AKTU College Code",
        value: "192",
      },
    ],
    hasCertification: [
      {
        "@type": "Certification",
        "@id": "https://www.glbitm.org/#naac-accreditation",
        name: "NAAC A+ Institutional Accreditation - First Cycle",
        description:
          "GL Bajaj Institute of Technology and Management holds institutional accreditation from the National Assessment and Accreditation Council (NAAC), with A+ grade and CGPA 3.33 on a four-point scale. The accreditation is valid up to 20 December 2028.",
        certificationIdentification: "EC(SC)/178/1st Cycle/UPCOGN101456",
        issuedBy: {
          "@type": "Organization",
          name: "National Assessment and Accreditation Council",
          alternateName: "NAAC",
          url: "https://www.naac.gov.in/",
        },
        certificationRating: {
          "@type": "Rating",
          ratingValue: 3.33,
          bestRating: 4,
          ratingExplanation: "NAAC A+ grade",
        },
        expires: "2028-12-20",
        url: "https://www.glbitm.org/assets/img/pages/24/section_1783063078_6a476226ae961.pdf",
      },
      {
        "@type": "Certification",
        "@id": "https://www.glbitm.org/#qs-igauge-rating",
        name: "QS I-GAUGE Institutional Rating",
        description:
          "GL Bajaj Institute of Technology and Management received an overall Diamond institutional rating from QS I-GAUGE. Its 2025 institutional report records Diamond ratings in Teaching and Learning, Employability, Facilities and Social Responsibility, and Platinum ratings in Governance and Entrepreneurship.",
        issuedBy: {
          "@type": "Organization",
          name: "QS I-GAUGE",
          url: "https://www.igauge.in/",
        },
        certificationRating: {
          "@type": "Rating",
          ratingValue: "Diamond",
          ratingExplanation:
            "Overall institutional rating; Diamond in Teaching and Learning, Employability, Facilities and Social Responsibility; Platinum in Governance and Entrepreneurship.",
        },
        url: "https://www.igauge.in/institution/colleges/gl-bajaj-institute-of-technology-management",
      },
    ],
    award: [
      "Best Institute in Technology and Management Award in North India",
      "AKTU Leader Incubator Award 2026 - awarded to GLBCRI, the incubation centre of GLBITM",
    ],
    department: [
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-applied-science-humanities",
        name: "Applied Science and Humanities",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-cse",
        name: "Computer Science and Engineering",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-cse-ai",
        name: "Computer Science and Engineering (AI)",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-cse-aiml",
        name: "Computer Science and Engineering (AIML)",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-cse-data-science",
        name: "Computer Science and Engineering (Data Science)",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-csit",
        name: "Computer Science & Information Technology",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-electrical-computer",
        name: "Electrical and Computer Engineering",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-ece",
        name: "Electronics and Communication Engineering",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-mba",
        name: "Master of Business Administration",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-mca",
        name: "Master of Computer Applications",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.glbitm.org/#department-mechanical",
        name: "Mechanical Engineering",
        parentOrganization: {
          "@id": "https://www.glbitm.org/#organization",
        },
      },
    ],
    sameAs: [
      "https://www.facebook.com/glbitm",
      "https://x.com/glbajaj",
      "https://www.youtube.com/user/glbitm07",
      "https://www.instagram.com/glbajajitm/",
      "https://www.linkedin.com/school/g-l-bajaj-institute-of-technology-and-management/",
      "https://www.tumblr.com/glbajajitm",
      "https://in.pinterest.com/glbajaj/",
    ],
    subjectOf: [
      {
        "@type": "DigitalDocument",
        name: "GLBITM Mandatory Disclosure",
        url: "https://www.glbitm.org/assets/img/pages/184/section_1779345546_6a0ea88ac302d.pdf",
      },
      {
        "@type": "DigitalDocument",
        name: "GLBITM NAAC Accreditation Certificate",
        url: "https://www.glbitm.org/assets/img/pages/24/section_1783063078_6a476226ae961.pdf",
      },
      {
        "@type": "DigitalDocument",
        name: "AICTE Extension of Approval 2025-26 - GLBITM",
        url: "https://www.glbitm.org/assets/img/pages/407/section_1783402148_6a4c8ea43c4ee.pdf",
      },
      {
        "@type": "WebPage",
        name: "GLBITM QS I-GAUGE Institutional Profile",
        url: "https://www.igauge.in/institution/colleges/gl-bajaj-institute-of-technology-management",
      },
      {
        "@type": "DigitalDocument",
        name: "GLBITM Prospectus 2026",
        url: "https://www.glbitm.org/Uploads/section_1780393836_6a1ea76cc4357.pdf",
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Startups incubated through GLBITM/GLBCRI",
        value: 140,
        unitText: "startups",
      },
      {
        "@type": "PropertyValue",
        name: "Combined valuation of startups incubated through GLBITM/GLBCRI",
        value: 500,
        unitText: "INR crore",
      },
      {
        "@type": "PropertyValue",
        name: "Grant and support funding received by GLBITM/GLBCRI",
        value: 10,
        unitText: "INR crore",
      },
      {
        "@type": "PropertyValue",
        name: "Research papers published in SCI/Scopus",
        value: 2500,
        unitText: "papers",
      },
      {
        "@type": "PropertyValue",
        name: "Citations in Scopus",
        value: 23000,
        unitText: "citations",
      },
      {
        "@type": "PropertyValue",
        name: "Scopus h-index",
        value: 60,
      },
      {
        "@type": "PropertyValue",
        name: "Patents published",
        value: 776,
        unitText: "patents",
      },
      {
        "@type": "PropertyValue",
        name: "Patents granted",
        value: 18,
        unitText: "patents",
      },
    ],
  };
}