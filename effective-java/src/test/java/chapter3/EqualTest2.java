package chapter3;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;

public class EqualTest2 {

    class Point {
        int x,y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Point point = (Point) o;
            return x == point.x && y == point.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }

    enum Color { RED,BLUE,YELLOW}
    class ColorPoint extends Point{
         Color color;

        public ColorPoint(int x, int y, Color color) {
            super(x, y);
            this.color = color;
        }
    }

    @Test
    void givenPointWhenEqualsReturnTrue(){
        Point p1 = new Point(1, 2);
        Point p2 = new Point(1, 2);
        assertThat(p1.equals(p2)).isEqualTo(true);
    }

    @Test
    void givenColorPointWhenEqualsReturnTrue(){
        ColorPoint cp1 = new ColorPoint(1, 2, Color.RED);
        ColorPoint cp2 = new ColorPoint(1, 2, Color.BLUE);
        assertThat(cp1.equals(cp2)).isEqualTo(true);
    }

    @Test
    void givenPointAndColorPointWhenEqualsReturnFalse(){
        Point point = new Point(1, 2);
        ColorPoint colorPoint = new ColorPoint(1, 2, Color.BLUE);
        assertThat(point.equals(colorPoint)).isEqualTo(false);
    }
}
