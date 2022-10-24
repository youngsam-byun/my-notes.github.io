---
layout: page
parent: Effective_Java
nav_order: 1
title:  Autoboxing blurs but does not erase the distinction between primitive and boxed primitive types
---

```
// Hideously slow! Can you spot the object creation?
private static long sum() {
    Long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++)
        sum += i;

    return sum;
}
```

{% include disqus.html %}

