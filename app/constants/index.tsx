import { 
  IconDeviceDesktopAnalytics, 
  IconLibraryPhoto,
  IconBox,
  IconStar,
  IconPhoneCall
} from "@tabler/icons-react"

const heroInfo1 = [
  {
    title: "평균 월 120만원",
    desc: "임금을 해당 국가를 기준으로 계산합니다."
  },
  {
    title: "최대 3회 인력교체",
    desc: "막상 채용해보니 맞지 않아도 걱정하지 마세요."
  },
  {
    title: "평균 3일, 최대 10일",
    desc: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
  },
];

const heroInfo2 = [
  {
    icon: <IconDeviceDesktopAnalytics className="text-white text-[14px]" />,
    text: "해외 마케팅"
  },
  {
    icon: <IconLibraryPhoto className="text-white text-[14px]" />,
    text: "퍼블리셔"
  },
  {
    icon: <IconBox className="text-white text-[14px]" />,
    text: "캐드원(제도사)"
  },
  {
    icon: <IconStar className="text-white text-[14px]" />,
    text: "해외 세일즈"
  },
  {
    icon: <IconPhoneCall className="text-white text-[14px]" />,
    text: "해외 CS"
  },
];

const testimonials = [
  {
    id: 0,
    profileSrc: "/profile-pic.jpg",
    flagSrc: "/columbia-flag.jpg",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
  {
    id: 1,
    profileSrc: "/profile-pic.jpg",
    flagSrc: "/columbia-flag.jpg",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
  {
    id: 2,
    profileSrc: "/profile-pic.jpg",
    flagSrc: "/columbia-flag.jpg",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
];

export {
  heroInfo1,
  heroInfo2,
  testimonials
}