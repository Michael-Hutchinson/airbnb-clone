'use client';

import Container from '../../container/Container';

import CategoryBox from '../../categorybox/CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { categories } from './categoryItems';

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={item.label === category}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
