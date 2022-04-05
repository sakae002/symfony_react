<?php

namespace App\Tests;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public function testSomething(): void
    {
        $result = true === 'true';
        $this->assertFalse($result);
    }
}
