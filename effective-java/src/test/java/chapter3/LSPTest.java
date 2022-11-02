package chapter3;

import org.junit.jupiter.api.Test;

public class LSPTest {

    public static void increaseHeight(Rectangle rectangle){
        if(rectangle.getHeight()<=rectangle.getWidth()){
            rectangle.setHeight(rectangle.getWidth()+1);
        }
    }

    class Rectangle {
        int width, height;

        public Rectangle(int width, int height) {
            this.width = width;
            this.height = height;
        }

        public int getWidth() {
            return width;
        }

        public int getHeight() {
            return height;
        }

        public void setWidth(int width) {
            this.width = width;
        }

        public void setHeight(int height) {
            this.height = height;
        }

        @Override
        public String toString() {
            return getClass().getSimpleName()+"{" +
                    "width=" + width +
                    ", height=" + height +
                    '}';
        }
    }

    class Square extends Rectangle {
        public Square(int width, int height) {
            super(width, height);
        }
    }


    @Test
    void LSPViolationExample(){
        Rectangle rectangle = new Rectangle(2, 1);
        System.out.println(rectangle);
        Square square = new Square(2, 2);
        System.out.println(square);
        System.out.println("after invoke increaseHeight()");
        increaseHeight(rectangle);
        System.out.println(rectangle);
        increaseHeight(square);
        System.out.println(square);
    }

    @Test
    void printInstanceAndClassName() {
        Rectangle rectangle = new Rectangle(2, 1);
        System.out.println(rectangle);
        System.out.println(rectangle.getClass());
        Square square = new Square(2, 2);
        System.out.println(square);
        System.out.println(square.getClass());
        Rectangle rectangleButSquareInstance = new Square(3, 3);
        System.out.println(rectangleButSquareInstance);
        System.out.println(rectangleButSquareInstance.getClass());
    }


}
