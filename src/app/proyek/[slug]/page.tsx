import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import Heading from "@/components/elements/Heading";
import Link from "next/link";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

// Komponen untuk menampilkan bagian konten
const ContentSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">{title}</h2>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  // Jika proyek dengan slug tersebut tidak ditemukan, tampilkan halaman 404
  if (!project) {
    notFound();
  }

  const { title, content } = project;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Tombol kembali ke Halaman Utama */}
        <Link href="/#projects" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Kembali ke semua proyek
        </Link>
        
        {/* Header Proyek */}
        <Heading level={1} className="text-gray-900 text-center">{title}</Heading>
        <p className="text-center text-xl text-gray-500 mt-2 mb-12">Studi Kasus Detail</p>

        {/* --- KONTEN DETAIL PROYEK --- */}

        {/* Deskripsi */}
        <ContentSection title={content.description.title}>
          {content.description.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </ContentSection>

        {/* Tujuan Proyek */}
        {content.goals && (
          <ContentSection title={content.goals.title}>
            <ul className="list-disc list-inside">
              {content.goals.text.map((goal, index) => <li key={index}>{goal}</li>)}
            </ul>
          </ContentSection>
        )}

        {/* Fitur Utama */}
        <ContentSection title={content.keyFeatures.title}>
          {content.keyFeatures.features.map((category, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.category}</h3>
              <ul className="list-disc list-inside pl-4">
                {category.points.map((point, pIndex) => <li key={pIndex}>{point}</li>)}
              </ul>
            </div>
          ))}
        </ContentSection>

        {/* Teknologi */}
        <ContentSection title={content.techStack.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.techStack.stacks.map((stack, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-800">{stack.category}:</p>
                <p>{stack.items}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Tantangan & Pembelajaran */}
        {content.challenges && (
          <ContentSection title={content.challenges.title}>
             {content.challenges.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </ContentSection>
        )}

      </div>
    </div>
  );
}