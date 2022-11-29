import Card from '../components/Card'
import AppContext from '../AppContext'
import { useContext } from 'react'

export default function Favorites({ onFavoriteItem, onAddItem }) {
  const { favorites: items } = useContext(AppContext)
  return (
    <main className="px-14 py-10">
      <section>
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Мои закладки</h1>
        </div>
        <div className="flex flex-wrap gap-10">
          {items.map((item) => (
            <Card
              {...item}
              key={item.itemID}
              onAddItem={onAddItem}
              onFavoriteItem={onFavoriteItem}
              taggedFavorite
            />
          ))}
        </div>
      </section>
    </main>
  )
}