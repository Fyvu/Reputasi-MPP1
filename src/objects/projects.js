import Project1 from "../assets/Project1.png";
import fotbar from "../assets/fotbar.png";
import FOA from "../assets/FOA.jpg";
import Cyber_bnsp from "../assets/Cyber_bnsp.png";

export const projects = {
  VR_Pijar: {
    title: "VR Training",
    organized_by: "Pijar Talenta",
    img: Project1,
    desc: "Mengembangkan game VR simulasi instalasi jaringan komputer.",
  },
  Fiber_Academy: {
    title: "Fiber Academy",
    organized_by: "Telkom Akses ",
    img: FOA,
    desc: "Pelatihan instalasi kabel fiber optic dari desain FTTh sampai penyambungan kabel menggunakan Fusion Splicer.",
  },
  Litmovation: {
    title: "LITMOVATION",
    organized_by: "self project",
    img: fotbar,
    desc: "LITMOVATION adalah sebuah inisiatif kolaboratif yang lahir dari semangat eksplorasi dan pembelajaran. Kami merupakan sekelompok anak muda yang ingin mengajak audiens untuk memulai perjalanan self improvement bersama kami. Dengan fokus pada motivasi yang diiringi aksi nyata, LITMOVATION berusaha membangun komunitas yang berbagi inspirasi, pengetahuan, dan dukungan satu sama lain. ",
  },
  Cyber_bnsp: {
    title: "Cybersecurity Officer BNSP,",
    organized_by: "Telkom DIgiUp",
    img: Cyber_bnsp,
    desc: "Program bersertifikasi BNSP keahlian Cybersecurity",
  },
};

const template = {
  name: {
    title: "",
    organized_by: "",
    img: "",
    desc: "",
  },
};
