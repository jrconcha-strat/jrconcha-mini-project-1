import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.project; 

  return <div>Project ID: {projectId}</div>;
}