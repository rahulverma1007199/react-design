import { allRoutes } from '@/utils/allRoutes'
import ImageGrid from '../components/imageGrid/ImageGrid'

export default function Home() {
  return (
    <>
      <ImageGrid allRoutes = {allRoutes}/>
    </>
  )
}
