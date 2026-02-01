import { useEffect, useState } from 'react';

export function useCourses(subject = 'CMPT') {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.sfucourses.com/courses/${subject}`)
      .then(res => res.json())
      .then(setCourses)
      .finally(() => setLoading(false));
  }, [subject]);

  return { courses, loading };
}
