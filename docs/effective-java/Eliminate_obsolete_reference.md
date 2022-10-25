---
layout: page
parent: Effective_Java
nav_order: 1
title:  Eliminate obsolete reference
---

```
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null; // Eliminate obsolete reference
    return result;
}
```

{% include disqus.html %}

